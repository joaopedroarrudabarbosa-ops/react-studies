export default function FilterInput({ value, onChange, placeholder }) {
    return (
        <input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    )
}