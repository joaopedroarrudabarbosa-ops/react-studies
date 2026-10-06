export default function InputText ({label, type, placeholder, onChange, value, error, erroMensagem}) {
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