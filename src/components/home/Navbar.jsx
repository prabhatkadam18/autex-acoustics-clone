import { TextInput, UnstyledButton } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import styled from "styled-components"

const Navbar = () => {
	return <Wrapper>
		<Logo>
			<svg width="131" height="44" viewBox="0 0 131 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M40.9391 1.47754V0H41.3885L41.8728 1.07769L42.3492 0H42.7993V1.47754H42.4912V0.364824L41.9988 1.47754H41.7286L41.2465 0.364824V1.47754H40.9391ZM39.465 0.297698V0H40.7709V0.297698H40.2844V1.47754H39.9544V0.297698H39.465Z" fill="currentColor"></path><path d="M18.2227 43.8038H0L3.26726 15.5882H21.4899L18.2227 43.8038Z" fill="currentColor"></path><path d="M24.5803 43.8038H42.7993L37.567 0H19.3065L24.5803 43.8038Z" fill="currentColor"></path><path d="M62.8151 23.1788L60.9892 18.1033L59.199 23.1788H62.8151ZM63.4597 24.9897H58.5544L57.4262 28.182H55.3316L60.022 15.6269H62.027L66.7356 28.182H64.6053L63.4597 24.9897Z" fill="currentColor"></path><path d="M68.2228 27.4655C67.7094 26.8679 67.453 25.9346 67.453 24.6672V19.3583H69.3867V24.506C69.3867 25.2714 69.5178 25.8186 69.7807 26.147C70.0429 26.476 70.4668 26.6402 71.0517 26.6402C72.3648 26.6402 73.021 25.7676 73.021 24.0215V19.3583H74.9548V28.1827H73.1106V27.0167C72.5374 27.9142 71.6839 28.3622 70.5506 28.3622C69.512 28.3622 68.7363 28.063 68.2228 27.4655Z" fill="currentColor"></path><path d="M77.3714 25.9587V21.062H76.1536V19.3583H77.3714V16.8293H79.3051V19.3583H81.131V21.062H79.3051V25.5107C79.3051 25.893 79.3794 26.171 79.5287 26.3439C79.678 26.5176 79.9555 26.6044 80.3611 26.6044C80.576 26.6044 80.8324 26.5745 81.131 26.5147V28.1826C80.6415 28.2906 80.2242 28.3439 79.8775 28.3439C78.2068 28.3439 77.3714 27.5493 77.3714 25.9587Z" fill="currentColor"></path><path d="M83.7988 22.8015H87.9342C87.8271 21.4386 87.1644 20.7571 85.9473 20.7571C84.742 20.7571 84.0253 21.4386 83.7988 22.8015ZM90.0114 25.51C89.7128 26.514 89.2117 27.2436 88.5074 27.6982C87.8031 28.1528 86.9918 28.3797 86.0726 28.3797C84.7835 28.3797 83.742 27.9609 82.9488 27.124C82.1549 26.2871 81.758 25.1692 81.758 23.7698C81.758 22.2871 82.1579 21.1489 82.9576 20.3536C83.7573 19.5582 84.7536 19.1606 85.9473 19.1606C87.1767 19.1606 88.1556 19.5765 88.8832 20.4068C89.6115 21.2379 89.9757 22.3054 89.9757 23.6085V24.147H83.7449C83.793 25.008 84.0224 25.6537 84.4346 26.0842C84.8461 26.514 85.3924 26.73 86.0726 26.73C87.0515 26.73 87.7019 26.3228 88.0238 25.51H90.0114Z" fill="currentColor"></path><path d="M93.1629 23.645L90.3697 19.3583H92.6079L94.3267 22.1383L96.0274 19.3583H98.2116L95.401 23.6268L98.3726 28.1827H96.1351L94.2553 25.1335L92.393 28.1827H90.2088L93.1629 23.645Z" fill="currentColor"></path><path d="M62.8151 38.7976L60.9892 33.7222L59.199 38.7976H62.8151ZM63.4597 40.6093H58.5544L57.4262 43.8015H55.3316L60.022 31.2465H62.027L66.7364 43.8015H64.6053L63.4597 40.6093Z" fill="currentColor"></path><path d="M68.0611 42.7443C67.2971 41.9074 66.9155 40.7895 66.9155 39.3901C66.9155 37.9913 67.2971 36.8735 68.0611 36.0359C68.8252 35.199 69.8455 34.7809 71.1223 34.7809C72.1492 34.7809 73.0174 35.0589 73.7275 35.6149C74.4376 36.1709 74.8943 36.9392 75.0975 37.9198H73.1099C72.788 36.9625 72.1252 36.4846 71.1223 36.4846C70.3947 36.4846 69.831 36.7356 69.4304 37.2376C69.0313 37.7403 68.831 38.4576 68.831 39.3901C68.831 40.3226 69.0313 41.0406 69.4304 41.5425C69.831 42.0445 70.3947 42.2955 71.1223 42.2955C72.1849 42.2955 72.8593 41.7695 73.1456 40.7173H75.115C74.9241 41.7461 74.4704 42.5502 73.7545 43.1295C73.0385 43.7096 72.1609 44 71.1223 44C69.8455 44 68.8252 43.5812 68.0611 42.7443Z" fill="currentColor"></path><path d="M81.8032 41.5425C82.2031 41.0406 82.4026 40.3226 82.4026 39.3901C82.4026 38.4459 82.2031 37.725 81.8032 37.2289C81.4034 36.7327 80.8389 36.4846 80.1113 36.4846C79.3713 36.4846 78.8011 36.7327 78.4012 37.2289C78.0014 37.725 77.8018 38.4459 77.8018 39.3901C77.8018 40.3226 78.0014 41.0406 78.4012 41.5425C78.8011 42.0445 79.3713 42.2955 80.1113 42.2955C80.8389 42.2955 81.4034 42.0445 81.8032 41.5425ZM77.0137 42.7443C76.2381 41.9074 75.8499 40.7895 75.8499 39.3901C75.8499 37.9913 76.2381 36.8735 77.0137 36.0359C77.7894 35.199 78.8222 34.7809 80.1113 34.7809C81.3997 34.7809 82.4296 35.199 83.1994 36.0359C83.9693 36.8735 84.3538 37.9913 84.3538 39.3901C84.3538 40.7895 83.9693 41.9074 83.1994 42.7443C82.4296 43.5812 81.3997 44 80.1113 44C78.8222 44 77.7894 43.5812 77.0137 42.7443Z" fill="currentColor"></path><path d="M86.5744 43.085C86.061 42.4875 85.8046 41.5542 85.8046 40.2868V34.9779H87.7383V40.1256C87.7383 40.891 87.8694 41.4382 88.1323 41.7666C88.3945 42.0956 88.8184 42.2598 89.4033 42.2598C90.7164 42.2598 91.3726 41.3871 91.3726 39.6411V34.9779H93.3063V43.8023H91.4622V42.6363C90.889 43.5338 90.0354 43.9818 88.9022 43.9818C87.8636 43.9818 87.0879 43.6826 86.5744 43.085Z" fill="currentColor"></path><path d="M95.9473 43.255C95.2969 42.7589 94.9298 42.038 94.8461 41.0938H96.7441C96.9109 42.0022 97.5612 42.4568 98.6953 42.4568C99.8649 42.4568 100.45 42.1044 100.45 41.3988C100.45 41.1113 100.336 40.8786 100.11 40.6991C99.8831 40.5196 99.4949 40.37 98.9458 40.2511L98.176 40.0716C97.0784 39.8082 96.2874 39.4704 95.8038 39.0581C95.3209 38.6451 95.0791 38.0986 95.0791 37.4171C95.0791 36.5678 95.3799 35.9162 95.983 35.4617C96.586 35.0078 97.4302 34.7802 98.5161 34.7802C99.6501 34.7802 100.534 35.0195 101.166 35.4974C101.799 35.9761 102.15 36.6692 102.223 37.5784H100.306C100.211 36.7415 99.6326 36.3226 98.57 36.3226C97.5314 36.3226 97.0128 36.6459 97.0128 37.2909C97.0128 37.5784 97.1199 37.8082 97.3347 37.9819C97.5496 38.1555 97.9254 38.3015 98.4629 38.4211L99.2328 38.6006C100.343 38.8399 101.145 39.169 101.641 39.5871C102.136 40.0059 102.383 40.5677 102.383 41.2733C102.383 42.146 102.055 42.8187 101.399 43.2908C100.743 43.7629 99.8234 43.9993 98.6414 43.9993C97.4957 43.9993 96.5977 43.7512 95.9473 43.255Z" fill="currentColor"></path><path d="M104.138 41.5783V36.6816H102.92V34.9779H104.138V32.4489H106.072V34.9779H107.898V36.6816H106.072V41.1303C106.072 41.5126 106.146 41.7906 106.295 41.9635C106.445 42.1372 106.722 42.224 107.128 42.224C107.343 42.224 107.599 42.1941 107.898 42.1343V43.8022C107.408 43.9102 106.991 43.9635 106.644 43.9635C104.973 43.9635 104.138 43.1689 104.138 41.5783Z" fill="currentColor"></path><path d="M109.204 34.9779H111.138V43.8022H109.204V34.9779ZM109.169 31.3194H111.192V33.2924H109.169V31.3194Z" fill="currentColor"></path><path d="M113.841 42.7443C113.077 41.9074 112.696 40.7895 112.696 39.3901C112.696 37.9913 113.077 36.8735 113.841 36.0359C114.605 35.199 115.626 34.7809 116.903 34.7809C117.93 34.7809 118.798 35.0589 119.508 35.6149C120.218 36.1709 120.675 36.9392 120.878 37.9198H118.89C118.568 36.9625 117.905 36.4846 116.903 36.4846C116.175 36.4846 115.611 36.7356 115.211 37.2376C114.812 37.7403 114.611 38.4576 114.611 39.3901C114.611 40.3226 114.812 41.0406 115.211 41.5425C115.611 42.0445 116.175 42.2955 116.903 42.2955C117.965 42.2955 118.64 41.7695 118.926 40.7173H120.895C120.704 41.7461 120.251 42.5502 119.535 43.1295C118.819 43.7096 117.941 44 116.903 44C115.626 44 114.605 43.5812 113.841 42.7443Z" fill="currentColor"></path><path d="M122.664 43.2558C122.014 42.7603 121.648 42.0409 121.564 41.0975H123.459C123.626 42.0052 124.275 42.459 125.408 42.459C126.576 42.459 127.16 42.1066 127.16 41.4017C127.16 41.115 127.047 40.8822 126.821 40.7027C126.594 40.524 126.207 40.3744 125.659 40.2555L124.89 40.076C123.793 39.8133 123.003 39.4762 122.521 39.0639C122.038 38.6517 121.796 38.1059 121.796 37.4251C121.796 36.5773 122.097 35.9265 122.699 35.4726C123.302 35.0188 124.145 34.7918 125.23 34.7918C126.362 34.7918 127.244 35.0304 127.876 35.5084C128.508 35.9863 128.859 36.6787 128.931 37.5864H127.018C126.922 36.7502 126.344 36.3321 125.283 36.3321C124.246 36.3321 123.728 36.6546 123.728 37.2996C123.728 37.5864 123.835 37.8162 124.05 37.9892C124.264 38.1621 124.64 38.3087 125.176 38.4284L125.945 38.6072C127.053 38.8465 127.855 39.1748 128.35 39.5922C128.844 40.0103 129.092 40.5714 129.092 41.2762C129.092 42.1482 128.764 42.8202 128.109 43.2915C127.452 43.7636 126.535 43.9993 125.355 43.9993C124.211 43.9993 123.313 43.7512 122.664 43.2558Z" fill="currentColor"></path><path d="M129.534 32.6094C129.681 32.6094 129.777 32.5212 129.777 32.3803C129.777 32.2329 129.681 32.152 129.534 32.152H129.262V32.6094H129.534ZM128.915 31.8419H129.548C129.924 31.8419 130.123 32.0637 130.123 32.373C130.123 32.5803 130.042 32.7495 129.814 32.8458L130.241 33.4142H129.814L129.446 32.9123H129.262V33.4142H128.915V31.8419ZM130.654 32.6685C130.654 31.9747 130.153 31.4654 129.475 31.4654C128.79 31.4654 128.288 31.9747 128.288 32.6685C128.288 33.3624 128.79 33.8717 129.468 33.8717C130.153 33.8717 130.654 33.3624 130.654 32.6685ZM127.95 32.6685C127.95 31.8127 128.621 31.148 129.475 31.148C130.33 31.148 131 31.8127 131 32.6685C131 33.5252 130.322 34.1818 129.468 34.1818C128.621 34.1818 127.95 33.5252 127.95 32.6685Z" fill="currentColor"></path></svg>
		</Logo>
		<CategoryWrapper>
			<Category>Products</Category>
			<Category>Resources</Category>
			<Category>About us</Category>
			<Category>Sustainability</Category>
		</CategoryWrapper>
		<PagesWrapper>
			<SearchInput placeholder="Search" leftSection={<IconSearch color="#fff" size={16}/>}/>
			<Page component="a">Explore colors</Page>
			<Page component="a">Documents</Page>
			<Page component="a">Contact us</Page>
		</PagesWrapper>
	
	</Wrapper>
};

const Wrapper = styled.div`
	position: fixed;
	display: flex;
	width: 100%;
	padding: 22px 46px;
	align-items: center;
	color: #fff;
	font-size: 16px;
	line-height: 22.4px;
	font-weight: 600;
	text-shadow: 0px 1px 2px #00000073;
`;

const Logo = styled.div`
	flex-basis: 25%;	
`;

const CategoryWrapper = styled.div`
	display: flex;
	flex-basis: 25%;
`;

const Category = styled.span`
	margin: 10px;
	user-select: none;
`;

const PagesWrapper = styled.div`
	flex-basis: 50%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

const Page = styled(UnstyledButton)`
	margin: 10px;
	user-select: none;

`;

const SearchInput = styled(TextInput)`
	width: 140px;
	margin-right: 10px;
	& input {
		border: none;
		background: none;
	}
	& input::placeholder {
		color: #fff;
		font-size: 16px;
		line-height: 22.4px;
		font-weight: 600;
		text-shadow: 0px 1px 2px #00000073;
		font-family: 'Raleway';
	}
`;

export default Navbar;