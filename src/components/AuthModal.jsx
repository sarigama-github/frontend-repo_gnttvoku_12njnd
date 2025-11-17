import React, { useState } from 'react'

function AuthModal({ open, onClose }) {
  const [isSignIn, setIsSignIn] = useState(true)

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center">
      <div className="absolute inset-0 bg-slate-900/80" onClick={onClose} />
      <div className="relative z-10 w-full max-w-md rounded-2xl border border-white/10 bg-slate-900/90 p-6 text-white shadow-2xl">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-xl font-semibold">{isSignIn ? 'Welcome back' : 'Create your account'}</h3>
          <button onClick={onClose} className="text-slate-300 hover:text-white">✕</button>
        </div>
        <form className="space-y-4">
          {!isSignIn && (
            <div>
              <label className="block text-sm text-slate-300 mb-1">Full Name</label>
              <input className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-400/50" placeholder="Jane Doe" />
            </div>
          )}
          <div>
            <label className="block text-sm text-slate-300 mb-1">Email</label>
            <input type="email" className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-400/50" placeholder="you@clinic.com" />
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-1">Password</label>
            <input type="password" className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-400/50" placeholder="••••••••" />
          </div>
          <button type="button" className="w-full rounded-md bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 text-sm font-medium">
            {isSignIn ? 'Sign In' : 'Create Account'}
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-slate-300">
          {isSignIn ? 'New to PulseCare?' : 'Already have an account?'}{' '}
          <button onClick={() => setIsSignIn(!isSignIn)} className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4">
            {isSignIn ? 'Create an account' : 'Sign in'}
          </button>
        </p>
      </div>
    </div>
  )
}

export default AuthModal
