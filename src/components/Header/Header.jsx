import { StyledLink, PageItem, HeaderItems } from './Header.styled';

const navItem = [
  { href: '/', text: 'Home' },
  { href: '/movies', text: 'Movies' },
];

export const Header = () => {
  return (
    <HeaderItems>
      <div className="container">
        <nav>
          <PageItem>
            {navItem.map(({ href, text }) => {
              return (
                <li key={href}>
                  <StyledLink to={href}>{text}</StyledLink>
                </li>
              );
            })}
          </PageItem>
        </nav>
      </div>
    </HeaderItems>
  );
};
