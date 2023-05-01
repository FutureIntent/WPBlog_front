import styled from 'styled-components';

const ListItem = styled.li`
    padding-bottom: 3rem;
    padding-left: 3rem;
    position: relative;

    &::before {
        content: '';
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        background-color: var(--blue-brand);
        position: absolute;
        top: 0.25rem;
        left: -0.3rem;
    }

    &:not(:last-of-type) {
        &::after {
            background-color: var(--blue-brand);
            content: '';
            height: 100%;
            left: 0.32rem;
            position: absolute;
            top: 0.5rem;
            width: 5px;
        }
    }
`;

export default ListItem;
