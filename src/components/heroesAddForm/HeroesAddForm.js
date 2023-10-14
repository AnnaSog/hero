import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { heroCreated } from '../../actions/actions';

const HeroesAddForm = () => {
    const [nameHero, setNameHero] = useState('');
    const [description, setDescription] = useState('');
    const [element, setElement] = useState('');

    const {heroes} = useSelector(state => state)
    const dispatch = useDispatch();

    const onCreateHero = (e) => {
        e.preventDefault();
        const newHero = {
            id: heroes.length + 1 ,
            name: nameHero,
            description: description,
            element: element
        }
        console.log(newHero);
        dispatch(heroCreated(newHero))
        clearInput();
    }

    function clearInput(){
        setNameHero('');
        setDescription('');
        setElement('');
    }

    return (
        <form className="border p-4 shadow-lg rounded" onSubmit={onCreateHero}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label fs-4">Имя нового героя</label>
                <input 
                    required
                    type="text" 
                    name="name" 
                    value={nameHero}
                    className="form-control" 
                    id="name" 
                    placeholder="Как меня зовут?"
                    onChange={(e) => setNameHero(e.target.value)}/>
                    
            </div>

            <div className="mb-3">
                <label htmlFor="text" className="form-label fs-4">Описание</label>
                <textarea
                    required
                    name="text" 
                    className="form-control" 
                    value={description}
                    id="text" 
                    placeholder="Что я умею?"
                    onChange={(e) => setDescription(e.target.value)}
                    style={{"height": '130px'}}/>
            </div>

            <div className="mb-3">
                <label htmlFor="element" className="form-label">Выбрать элемент героя</label>
                <select 
                    required
                    className="form-select" 
                    id="element"
                    value={element}
                    name="element"
                    onChange={(e) => setElement(e.target.value)}>
                    <option >Я владею элементом...</option>
                    <option value="fire">Огонь</option>
                    <option value="water">Вода</option>
                    <option value="wind">Ветер</option>
                    <option value="earth">Земля</option>
                </select>
            </div>

            <button type="submit" className="btn btn-primary">Создать</button>
        </form>
    )
}

export default HeroesAddForm;