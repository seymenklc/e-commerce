export default function Button({ icon: Icon, callback, value, style }) {
    return (
        <button
            onClick={() => callback(value)}
            className={`text-red-400 ${style && style}`}
        >
            <Icon className='h-6 w-6' />
        </button>
    );
}