export default function TextInput({
  text,
  className,
  value,
  onChange,
  type = "text",
}) {
  return (
    <input
      className={`rounded-lg text-zinc-700 bg-zinc-400 h-10 mt-2 mb-2 placeholder:text-zinc-700 pl-3 ${className}`}
      placeholder={text}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
}
