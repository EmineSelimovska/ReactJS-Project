export default function HeadeLeft({
    _id,
    phone,
    email
}) {
    return (
        <div className="aa-header-left">
        <div className="aa-telephone-no">
          <span className="fa fa-phone" />
        {phone}
        </div>
        <div className="aa-email hidden-xs">
          <span className="fa fa-envelope-o" /> {email}
        </div>
      </div>
    )
}