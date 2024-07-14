import { Card } from 'primereact/card';

export default function BasicCardComponent({ title, content, header, footer }) {
    return (
        <div className="card">
            <Card title={title} header={header} footer={footer}>
                {content}
            </Card>
        </div>
    );
}