export default function WelcomeModal() {
  function closeModal() {
    document.querySelector(".modal-welcome").close();
  }

  return (
    <>
      <dialog className="modal-welcome">
        <div>
          <h1>"Don't click on the same card twice!"</h1>
          <button onClick={closeModal}>Understood</button>
        </div>
      </dialog>
    </>
  );
}
