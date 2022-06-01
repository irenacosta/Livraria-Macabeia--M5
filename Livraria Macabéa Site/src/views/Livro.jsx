import React from 'react'
import BookCover from '../components/BookCover'
import BookSection from '../components/BookSection'
import BookTable from '../components/BookTable'
import '../style/livro.css'

function PaginaLivro () {
    return(
        <section className='main'>
            <BookCover />
            <BookSection />
            <BookTable />
        </section>
    )
}

export default PaginaLivro;