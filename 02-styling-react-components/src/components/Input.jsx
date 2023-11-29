export default function Input({ label, invalid, ...props }) {
  let labelClasses = 'block mb-2 text-xs font-bold tracking-wide uppercase'
  let inputClases = 'w-full px-3 py-2 leading-tight border rounded shadow'

  if (invalid) {
    labelClasses += ' text-red-400'
    inputClases += ' bg-red-100 text-red-500 border-red-300'
  } else {
    labelClasses += ' text-stone-200'
    inputClases += ' bg-stone-200 text-gray-700'
  }

  return (
    <p>
      <label className={labelClasses}>{label}</label>
      <input
        className={inputClases}
        {...props}
      />
    </p>
  )
}
