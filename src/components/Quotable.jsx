import useFetch from "../hooks/useFetch";
import style from '../modules/Quotable.module.css';

const Quotable = (() => {
    const { data, fetchData, error, loading } = useFetch()

    if (loading) return (
        <div className={style['loading']}>Loading...</div>
    )

    if (error) return (
        <div className={style['error']}>There is an error.</div>
    )

    if (data) return (
        <>
        <div className={style['quote-card']}>
            <p className={style['content']}>{data.content}</p>
            <p className={style['author']}>{data.author}</p>

            <button className={style['button']} onClick={fetchData}>
                New Quote
            </button>
        </div>
        </>
    )
})

export default Quotable;