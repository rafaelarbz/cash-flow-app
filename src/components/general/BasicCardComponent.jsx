import { Card } from 'primereact/card';

export default function BasicCardComponent({ title, content, footer }) {
    return (
        <div className="card">
            <Card title={title} footer={footer}>
                {content}
            </Card>
        </div>
    );
}