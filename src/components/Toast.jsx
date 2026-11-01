import React from 'react';

export default function Toast({ toast }) {
  if (!toast) return null;

  return (
    <div className={`toast-notification ${toast ? 'show' : ''}`} id="toastNotification">
      <span className="toast-message" id="toastMessage">
        {toast}
      </span>
    </div>
  );
}
