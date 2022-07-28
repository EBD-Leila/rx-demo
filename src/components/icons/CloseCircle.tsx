const CloseCircle = ({ ...props }) => {
    return (
        <svg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <circle cx='15' cy='15' r='15' fill={props.bgcolor ? props.bgcolor : 'black'} />
            <path d='M21.5996 9.6001L9.59961 21.6001' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
            <path d='M9.59961 9.6001L21.5996 21.6001' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
    )
}

export default CloseCircle
