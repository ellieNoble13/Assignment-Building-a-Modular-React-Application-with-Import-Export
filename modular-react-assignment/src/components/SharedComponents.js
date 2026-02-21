export const Button = ({ text }) => {
    return (
        <button style={{ padding: '10px 20px', cursor: 'pointer', borderRadius: '5px' }}>
            {text}
        </button>
    );
};