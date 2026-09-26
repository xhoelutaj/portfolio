import { useEffect, useRef } from 'react'

// A short message with a single OK button. OK calls onConfirm;
// Esc or a click outside just closes it.
export default function NoticeModal({ title, message, onConfirm, onClose }) {
  const ref = useRef(null)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog.open) dialog.showModal()
  }, [])

  const confirm = () => {
    onConfirm()
    ref.current.close()
  }

  return (
    <dialog
      ref={ref}
      className="notice-modal"
      aria-labelledby="notice-title"
      onClose={onClose}
      onClick={(e) => e.target === ref.current && ref.current.close()}
    >
      <h3 id="notice-title">{title}</h3>
      <p>{message}</p>
      <button type="button" className="button" onClick={confirm} autoFocus>
        OK
      </button>
    </dialog>
  )
}
