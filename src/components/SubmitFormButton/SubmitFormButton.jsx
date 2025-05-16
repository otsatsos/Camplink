const SubmitFormButton = ({ children, style, onSubmit}) => {
    return <>
        <button type="submit" className={style}>{children}</button>
    </>
}

export default SubmitFormButton;