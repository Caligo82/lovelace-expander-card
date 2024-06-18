import { render } from '@testing-library/svelte';
import ExpanderCard from '../src/ExpanderCard.svelte';

test('it renders correctly', () => {
    const { getByText } = render(ExpanderCard, { title: 'Test Card' });
    expect(getByText('Test Card')).toBeInTheDocument();
});