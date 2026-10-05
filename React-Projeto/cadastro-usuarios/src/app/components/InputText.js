export default function InputText ({ type, label, placeholder, onChange, value, error, erroMensagem }) {
    return (
        <div>
            <label>{label}</label>
            <input 
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />

            {error && <p>{erroMensagem}</p>}

        </div>
    )
}