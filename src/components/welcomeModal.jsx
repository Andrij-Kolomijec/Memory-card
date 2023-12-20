export default function WelcomeModal() {
  function closeModal() {
    document.querySelector(".modal-welcome").classList.add("out");
    document.querySelector(".modal").style.display = "flex";
    document.querySelector(".modal-welcome").style.backgroundColor =
      "rgba(0, 0, 0, 0)";
  }
  return (
    <>
      <dialog className="modal-welcome">
        <div>
          <h1>Don't click on the same card twice!</h1>
          <button onClick={closeModal}>Let's play!</button>
        </div>
      </dialog>
    </>
  );
}
