import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function AuthModal({ open, onClose }) {
  const [isSignIn, setIsSignIn] = useState(true)

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div key="overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] flex items-center justify-center">
          <div className="absolute inset-0 bg-emerald-900/20 backdrop-blur-sm" onClick={onClose} />
          <motion.div initial={{ opacity: 0, y: 20, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: 0.98 }} transition={{ duration: 0.25 }} className="relative z-10 w-full max-w-md rounded-2xl border border-emerald-200/60 bg-white p-6 text-emerald-900 shadow-2xl">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-semibold">{isSignIn ? 'Welcome back' : 'Create your account'}</h3>
              <button onClick={onClose} className="text-emerald-700 hover:text-emerald-900">✕</button>
            </div>
            <form className="space-y-4">
              {!isSignIn && (
                <div>
                  <label className="block text-sm text-emerald-800/80 mb-1">Full Name</label>
                  <input className="w-full rounded-md border border-emerald-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-300" placeholder="Jane Doe" />
                </div>
              )}
              <div>
                <label className="block text-sm text-emerald-800/80 mb-1">Email</label>
                <input type="email" className="w-full rounded-md border border-emerald-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-300" placeholder="you@clinic.com" />
              </div>
              <div>
                <label className="block text-sm text-emerald-800/80 mb-1">Password</label>
                <input type="password" className="w-full rounded-md border border-emerald-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-300" placeholder="••••••••" />
              </div>
              <button type="button" className="w-full rounded-md bg-gradient-to-r from-emerald-500 to-sky-500 px-4 py-2 text-sm font-medium text-white shadow hover:from-emerald-400 hover:to-sky-400 transition-colors">
                {isSignIn ? 'Sign In' : 'Create Account'}
              </button>
            </form>
            <p className="mt-4 text-center text-sm text-emerald-800/80">
              {isSignIn ? 'New to PulseCare?' : 'Already have an account?'}{' '}
              <button onClick={() => setIsSignIn(!isSignIn)} className="text-emerald-700 hover:text-emerald-900 underline underline-offset-4">
                {isSignIn ? 'Create an account' : 'Sign in'}
              </button>
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default AuthModal
