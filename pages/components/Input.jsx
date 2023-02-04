export const Input = ({ prompt, setPrompt, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="prompt"
        placeholder="Enter a question"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};
