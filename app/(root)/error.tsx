'use client';

import { useEffect } from 'react';

interface ErrorProps {
    error: Error;
    reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <h2>Something went wrong!</h2>
            <p>{error.message}</p>
            <button
                onClick={() => reset()}
                style={{
                    padding: '10px 20px',
                    backgroundColor: '#0070f3',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
            >
                Try Again
            </button>
        </div>
    );
}
