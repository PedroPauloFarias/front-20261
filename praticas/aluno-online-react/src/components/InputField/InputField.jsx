import './InputField.css';

export function InputField({ id, label, type, value, onChange, erro }) {
  return (
    <div className="input-field">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
      />
      <span className="input-erro">{erro}</span>
    </div>
  );
}