export default function Errors({ errors }) {
    return Object.values(errors).length > 1 && (
        <ul className='mt-5 border border-red-600 p-3 rounded-lg'>
            {Object.values(errors).map(err => (
                <li key={err} className='text-xs text-red-600'>*{err}</li>
            ))}
        </ul>
    );
}
