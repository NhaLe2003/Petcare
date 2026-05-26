export function FormField({ label, error, children, required }) {
  return (
    <div>
      {label && (
        <label className="mb-1.5 block text-sm font-medium text-slate-700">
          {label}
          {required && <span className="text-accent-dark"> *</span>}
        </label>
      )}
      {children}
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  )
}

export function Input({ className = '', error, ...props }) {
  return (
    <input
      className={`w-full rounded-xl border bg-white px-4 py-3 text-slate-800 transition-colors outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 ${
        error ? 'border-red-400' : 'border-slate-200'
      } ${className}`}
      {...props}
    />
  )
}

export function Select({ className = '', error, children, ...props }) {
  return (
    <select
      className={`w-full rounded-xl border bg-white px-4 py-3 text-slate-800 transition-colors outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 ${
        error ? 'border-red-400' : 'border-slate-200'
      } ${className}`}
      {...props}
    >
      {children}
    </select>
  )
}

export function Textarea({ className = '', error, ...props }) {
  return (
    <textarea
      className={`w-full resize-none rounded-xl border bg-white px-4 py-3 text-slate-800 transition-colors outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 ${
        error ? 'border-red-400' : 'border-slate-200'
      } ${className}`}
      rows={4}
      {...props}
    />
  )
}
