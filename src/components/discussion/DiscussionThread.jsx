// src/components/discussion/DiscussionThread.jsx
import { useState, useEffect, useRef } from 'react';
import { Send, Trash2, Loader2, MessageSquare } from 'lucide-react';
import { subscribeDiscussions, postComment, deleteComment } from '../../services/discussionService';
import { useAuth } from '../../context/AuthContext';

function formatTime(ts) {
  if (!ts) return '';
  const d = ts.toDate ? ts.toDate() : new Date(ts);
  return d.toLocaleString('en-IN', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
}

function CommentCard({ comment, currentUserId, questionId, onDelete }) {
  const isOwn = comment.userId === currentUserId;
  const [deleting, setDeleting] = useState(false);

  async function handleDelete() {
    setDeleting(true);
    try {
      await deleteComment(questionId, comment.id);
      onDelete(comment.id);
    } finally {
      setDeleting(false);
    }
  }

  return (
    <div className={`flex gap-3 animate-fade-in ${isOwn ? 'flex-row-reverse' : ''}`}>
      {/* Avatar */}
      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white text-xs font-bold shrink-0">
        {comment.userName?.[0]?.toUpperCase() || '?'}
      </div>

      <div className={`flex-1 max-w-[85%] ${isOwn ? 'items-end' : 'items-start'} flex flex-col gap-1`}>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-gray-300">{comment.userName}</span>
          <span className="text-[10px] text-gray-600">{formatTime(comment.createdAt)}</span>
        </div>
        <div className={`relative group px-4 py-3 rounded-2xl text-sm text-gray-200 leading-relaxed
          ${isOwn ? 'bg-brand-600/30 border border-brand-500/30 rounded-tr-sm' : 'bg-dark-600/80 border border-white/5 rounded-tl-sm'}`}
        >
          <pre className="whitespace-pre-wrap font-sans break-words">{comment.content}</pre>

          {isOwn && (
            <button
              onClick={handleDelete}
              disabled={deleting}
              className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 p-1.5 rounded-full bg-rose-500/20 text-rose-400 hover:bg-rose-500/30 transition-all duration-200"
            >
              {deleting ? <Loader2 size={10} className="animate-spin" /> : <Trash2 size={10} />}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default function DiscussionThread({ questionId }) {
  const { user, profile } = useAuth();
  const [comments, setComments] = useState([]);
  const [text, setText] = useState('');
  const [posting, setPosting] = useState(false);
  const bottomRef = useRef(null);
  const textareaRef = useRef(null);

  useEffect(() => {
    if (!questionId) return;
    const unsub = subscribeDiscussions(questionId, setComments);
    return unsub;
  }, [questionId]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [comments]);

  async function handlePost(e) {
    e.preventDefault();
    if (!text.trim() || !user) return;
    setPosting(true);
    try {
      await postComment(questionId, user.uid, profile?.name || user.email, text.trim());
      setText('');
      textareaRef.current?.focus();
    } finally {
      setPosting(false);
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) handlePost(e);
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2 text-sm font-semibold text-gray-300">
        <MessageSquare size={15} className="text-brand-400" />
        Discussion
        {comments.length > 0 && (
          <span className="ml-1 px-2 py-0.5 rounded-full bg-brand-500/20 text-brand-300 text-xs">
            {comments.length}
          </span>
        )}
      </div>

      {/* Comments list */}
      <div className="space-y-4 max-h-80 overflow-y-auto scroll-container pr-1">
        {comments.length === 0 ? (
          <div className="text-center py-8 text-gray-500 text-sm">
            <MessageSquare size={28} className="mx-auto mb-2 opacity-30" />
            No comments yet. Be the first to discuss!
          </div>
        ) : (
          comments.map(c => (
            <CommentCard
              key={c.id}
              comment={c}
              currentUserId={user?.uid}
              questionId={questionId}
              onDelete={id => setComments(prev => prev.filter(c => c.id !== id))}
            />
          ))
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      {user ? (
        <form onSubmit={handlePost} className="flex flex-col gap-2">
          <textarea
            ref={textareaRef}
            value={text}
            onChange={e => setText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Write your solution or ask a doubt... (Ctrl+Enter to post)"
            rows={3}
            className="input-field resize-none font-mono text-xs"
          />
          <div className="flex justify-between items-center">
            <p className="text-[11px] text-gray-600">Use ``` for code blocks</p>
            <button
              type="submit"
              disabled={posting || !text.trim()}
              className="btn-primary text-xs px-4 py-2"
            >
              {posting ? <Loader2 size={13} className="animate-spin" /> : <Send size={13} />}
              {posting ? 'Posting...' : 'Post'}
            </button>
          </div>
        </form>
      ) : (
        <p className="text-sm text-gray-500 text-center py-2">Sign in to join the discussion</p>
      )}
    </div>
  );
}
