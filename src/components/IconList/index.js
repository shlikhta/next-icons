export const IconList = ({ list }) => {
  if (!list && !list.length) return null;

  return (
    <div className="icon-list">
      {list.map((item, index) => {
        return (
          <div key={index} className="icon-list__item" title={item.name}>
            {item.icon}
            <span className="icon-list__name">{item.name}</span>
          </div>
        );
      })}
    </div>
  );
};
