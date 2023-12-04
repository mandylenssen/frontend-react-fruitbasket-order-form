import './App.css'
import React, {useState} from "react";
import Counter from "./components/Counter.jsx";
import Input from "./components/Input.jsx";


function App() {
    const [strawberryCount, setStrawberryCount] = useState(0);
    const [bananaCount, setBananaCount] = useState(0);
    const [appleCount, setAppleCount] = useState(0);
    const [kiwiCount, setKiwiCount] = useState(0);

    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');
    // const [age, setAge] = useState(0);
    // const [zipcode, setZipcode] = useState('');
    // const [comment, setComment] = useState('');
    // const [termsAndConditions, setTermsAndConditions] = useState(false);

    const [formState, setFormState] = useState({
        firstname: '',
        lastname: '',
        age: 0,
        zipcode: '',
        deliveryFrequency: 'everyWeek',
        deliveryTime: 'Overdag',
        comment: '',
        termsAndConditions: false,
    });


    function resetCount() {
        setStrawberryCount(0);
        setBananaCount(0);
        setAppleCount(0);
        setKiwiCount(0);
    }


    function handleChange(e) {
        const changedFieldName = e.target.name;
        const newValue = e.target.type === "checkbox" ? e.target.checked : e.target.value;

        setFormState({
            ...formState,
            [changedFieldName]: newValue,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log('Formulier-waarden:', formState);
        console.log('Fruit-tellers:', {
            strawberryCount,
            bananaCount,
            appleCount,
            kiwiCount
        });
    }

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <section className="fruit-card">
                <article>
                <p>🍓Aardbeien</p>
                <Counter
                    fruitCount={strawberryCount}
                    setFruitCount={setStrawberryCount}/>
                </article>


                <article>
                <p>🍌Bananen</p>
                <Counter
                    fruitCount={bananaCount}
                    setFruitCount={setBananaCount}/>
                </article>

            <article>
                <p>🍏 Appels</p>
                <Counter
                    fruitCount={appleCount}
                    setFruitCount={setAppleCount}/>
            </article>

            <article>
                <p>🥝 Kiwi's</p>
                <Counter
                    fruitCount={kiwiCount}
                    setFruitCount={setKiwiCount}/>
            </article>


                <button type="button" onClick={resetCount}>Reset</button>


            </section>


            <form onSubmit={handleSubmit}>
                <section>
                    <Input name="firstname" label="Voornaam" type="text" value={formState.firstname}
                           eventHandler={handleChange}/>
                </section>
                <section>
                    <Input name="lastname" label="Achternaam" type="text" value={formState.lastname}
                           eventHandler={handleChange}/>
                </section>
                <section><Input name="age" label="Leeftijd" type="number" value={formState.age}
                                eventHandler={handleChange}/>
                </section>
                <section>
                    <Input name="zipcode" label="Postcode" type="text" value={formState.zipcode}
                           eventHandler={handleChange} placeholder="0"/>
                </section>

                <label htmlFor="delivery-frequency">Bezorgfrequentie</label>
                <section>
                    <select name="deliveryFrequency"
                            id="form-delivery-frequency"
                            value={formState.deliveryFrequency}
                            onChange={(e) => handleChange(e)}>
                        <option value="everyWeek">iedere week</option>
                        <option value="everyOtherWeek">om de week</option>
                        <option value="everyMonth">iedere maand</option>
                    </select>
                </section>
                <section>
                <input
                    type="radio"
                    value="daytime"
                    name="timeslot"
                    id="timeslot-daytime"
                    checked={formState.deliveryTime === 'daytime'}
                    onChange={() => handleChange({ target: { name: 'deliveryTime', value: 'daytime' } })}
                />
                <label htmlFor="timeslot-field-daytime">Overdag</label>
                <input
                    type="radio"
                    value="evening"
                    name="timeslot"
                    id="timeslot-evening"
                    checked={formState.deliveryTime === 'evening'}
                    onChange={() => handleChange({ target: { name: 'deliveryTime', value: 'evening' } })}

                />
                <label htmlFor="timeslot-evening">'s Avonds</label>
            </section>

            <section>
                <label htmlFor="form-comments">Opmerking</label>
                <textarea
                    id="form-comments"
                    name="comment"
                    rows="4"
                    cols="40"
                    value={formState.comment}
                    onChange={handleChange}
                            />
            </section>

                        <section>
                            <input
                                type="checkbox"
                                id="form-terms-and-conditions"
                                name="termsAndConditions"
                                value={formState.termsAndConditions}
                                onChange={handleChange}/>
                            <label htmlFor="terms-and-conditions-label">Ik ga akkoord met de voorwaarden</label>
                        </section>

                <button type="submit">Verzend</button>

            </form>


        </>
    )
}

export default App;

