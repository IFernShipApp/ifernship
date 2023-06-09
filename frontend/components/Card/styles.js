import styled from 'styled-components/native';

export const Container = styled.Pressable`
	shadow-color: #000;
	shadow-opacity: 0.23;
	shadow-radius: 2.62px;
	elevation: 4;
	width: 350px;
	height: 255px;
	margin: 10px;
	background-color: white;
	padding: 10px;
	border-radius: 20px;
	background-color: #f3f3f3;
`;

export const Image = styled.Image`
	width: 330px;
	height: 110px;
	border-radius: 20px;
`;

export const Title = styled.Text`
	text-align: left;
	margin-top: 5px;
	padding-left: 10px;
	font-size: 22px;
	font-weight: bold;
`;

export const Subtitle = styled.Text`
	text-align: left;
	margin-top: -3px;
	padding-left: 10px;
	font-size: 16px;
	color: #717171;
	font-weight: bold;
`;

export const Text = styled.Text`
	text-align: left;
	margin-top: 6px;
	padding-left: 10px;
	font-size: 16px;
	color: #838c95;
`;

export const Icon = styled.View`
	position: absolute;
	margin-left: 92%;
	margin-top: 65%;
`;
