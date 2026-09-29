import { useEffect, useRef } from 'react'

// A short message with a single OK button. OK calls onConfirm;
// Esc or a click outside just closes it.
export default function NoticeModal({ eyebrow, title, message, onConfirm, onClose }) {
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
      className="modal notice-modal"
      aria-labelledby="notice-title"
      onClose={onClose}
      onClick={(e) => e.target === ref.current && ref.current.close()}
    >
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h3 id="notice-title">{title}</h3>
      <p>{message}</p>
      <div className="notice-actions">
        <button type="button" className="btn btn-primary" onClick={confirm} autoFocus>
          OK
        </button>
      </div>
    </dialog>
  )
}
