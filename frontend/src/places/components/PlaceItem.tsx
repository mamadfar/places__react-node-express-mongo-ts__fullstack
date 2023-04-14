import "./PlaceItem.css";
import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import {useContext, useState} from "react";
import Modal from "../../shared/components/UIElements/Modal";
import Map from "../../shared/components/UIElements/Map";
import {AuthContext} from "../../shared/context/auth-context";

const PlaceItem = (props: any) => {

    const [showMap, setShowMap] = useState(false);
    const [showConfirmedModal, setShowConfirmedModal] = useState(false);

    const {isLoggedIn} = useContext(AuthContext);

    const openMapHandler = () => setShowMap(true);
    const closeMapHandler = () => setShowMap(false);
    const showDeleteWarningHandler = () => {
        setShowConfirmedModal(true);
    };
    const cancelDeleteHandler = () => {
        setShowConfirmedModal(false);
    };
    const confirmedDeleteHandler = () => {
        setShowConfirmedModal(false);
        console.log("Deleting...");
    }

    return (
        <>
            <Modal show={showMap} onCancel={closeMapHandler} header={props.address}
                   contentClass="place-item__modal-content" footerClass="place-item__modal-actions"
                   footer={<Button onClick={closeMapHandler}>CLOSE</Button>}>
                <div className="map-container">
                    <Map center={props.coordinates} zoom={16}/>
                </div>
            </Modal>
            <Modal show={showConfirmedModal} onCancel={cancelDeleteHandler} header="Are you sure?"
                   footerClass="place-item__modal-actions" footer={(
                <>
                    <Button inverse onClick={cancelDeleteHandler}>CANCEL</Button>
                    <Button danger onClick={confirmedDeleteHandler}>DELETE</Button>
                </>
            )}>
                <p>Do you want to proceed and delete this place? Please note that it can't be undone thereafter.</p>
            </Modal>
            <li className="place-item">
                <Card className="place-item__content">
                    <div className="place-item__image">
                        <img src={props.image} alt={props.title}/>
                    </div>
                    <div className="place-item__info">
                        <h2>{props.title}</h2>
                        <h3>{props.address}</h3>
                        <p>{props.description}</p>
                    </div>
                    <div className="place-item__actions">
                        <Button inverse onClick={openMapHandler}>VIEW ON MAP</Button>
                        {isLoggedIn && (
                            <>
                                <Button to={`/places/${props.id}`}>EDIT</Button>
                                <Button danger onClick={showDeleteWarningHandler}>DELETE</Button>
                            </>
                        )}
                    </div>
                </Card>
            </li>
        </>
    )
}

export default PlaceItem;
