const List = (props) => {
  return (
    <div>
      {props.ContentList.map((content, idx) => {
        return (
          <div
            key={idx}
            style={{
              width: '100%',
              marginLeft: '1rem',
            }}
          >
            <hr />
            내용 : {content}
          </div>
        )
      })}
    </div>
  )
}

export default List
