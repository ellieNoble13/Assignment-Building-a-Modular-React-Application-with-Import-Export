import React from 'react';
import { Button } from './SharedComponents';
export const ContentA = () => (
    <section style={{ padding: '20px', backgroundColor: '#f9f9f9', border: '1px solid #ddd' }}>
        <h2>Content Section A</h2>
        <p>This is modular component A.</p>
        <Button text="Click A" />
    </section>
);