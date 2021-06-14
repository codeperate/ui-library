export interface CdpModalProps {
	display?: boolean;
}
export interface CdpModalConfig {
	classList?: {
		container?: string;
		host?: string;
	};
	animation?: {
		open?: string | false;
		close?: string | false;
	};
}