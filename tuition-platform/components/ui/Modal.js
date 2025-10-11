'use client'

import { Modal as AntModal } from 'antd'
import { motion, AnimatePresence } from 'framer-motion'

export default function Modal({
  open,
  onClose,
  title,
  children,
  footer,
  width = 600,
  ...props
}) {
  return (
    <AntModal
      open={open}
      onCancel={onClose}
      title={title}
      footer={footer}
      width={width}
      {...props}
    >
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </AntModal>
  )
}
