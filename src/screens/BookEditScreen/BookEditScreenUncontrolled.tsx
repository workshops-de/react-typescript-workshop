import { useRef, FormEvent } from "react";

export const BookEditScreenUncontrolled = () => {
  const titleInputRef = useRef<HTMLInputElement>(null);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();

    // Be careful when using the ! operator to assert that a value is not null or undefined.
    // In this case it is ok, as we know that the ref will always be set to an element.
    console.log(titleInputRef.current!.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="title">Title:</label>
      <input ref={titleInputRef} type="text" id="title" name="title"></input>

      <button type="submit">Save</button>
    </form>
  );
};
