import { useRef, FormEvent } from "react";
import { useNavigate } from "react-router";

export const BookEditScreen = () => {
  const navigate = useNavigate();
  const titleInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();

    // Be careful when using the ! operator to assert that a value is not null or undefined.
    // In this case it is ok, as we know that the ref will always be set to an element.
    console.log(titleInputRef.current!.value);
  };

  const navigateBack = () => {
    navigate(-1);
  };

  return (
    <form className="book-edit-screen" onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        ref={titleInputRef}
        type="text"
        id="title"
        name="title"
        required
        minLength={5}
      />

      <div className="edit-buttons">
        <button type="submit">
          <span>💾</span>
          Save
        </button>
        <button className="secondary" onClick={navigateBack}>
          <span>❌</span>
          Cancel
        </button>
      </div>
    </form>
  );
};
