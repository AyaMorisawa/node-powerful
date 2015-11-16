export type DataSize = number;

export function fromKiB(dataSize: DataSize): number {
	'use strict';
	return dataSize * 1024;
}

export function fromKB(dataSize: DataSize): number {
	'use strict';
	return dataSize * 1000;
}

export function fromMiB(dataSize: DataSize): number {
	'use strict';
	return dataSize * 1048576;
}

export function fromMB(dataSize: DataSize): number {
	'use strict';
	return dataSize * 1000000;
}

export function fromGiB(dataSize: DataSize): number {
	'use strict';
	return dataSize * 1073741824;
}

export function fromGB(dataSize: DataSize): number {
	'use strict';
	return dataSize * 1000000000;
}

export function toKiB(dataSize: DataSize): number {
	'use strict';
	return dataSize / 1024;
}

export function toKB(dataSize: DataSize): number {
	'use strict';
	return dataSize / 1000;
}

export function toMiB(dataSize: DataSize): number {
	'use strict';
	return dataSize / 1048576;
}

export function toMB(dataSize: DataSize): number {
	'use strict';
	return dataSize / 1000000;
}

export function toGiB(dataSize: DataSize): number {
	'use strict';
	return dataSize / 1073741824;
}

export function toGB(dataSize: DataSize): number {
	'use strict';
	return dataSize / 1000000000;
}
