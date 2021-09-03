import Link from 'next/link';

export default function Index()
{
    return (
        <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Link href="/laboratorys/laboratorys">
                <a>Laboratórios</a>
            </Link>
            <Link href="/users/users">
                <a>Usuários</a>
            </Link>
            <Link href="/exams/exams">
                <a>Usuários</a>
            </Link>
        </div>
    )
}