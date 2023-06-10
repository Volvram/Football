import Head from "next/head";
import 'normalize.css';

type MetaProps = {
    title: string,
    description: string,
}

const Meta: React.FC<MetaProps> = ({title, description}) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description}/>
        </Head>
    )
}

export default Meta;