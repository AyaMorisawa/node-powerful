export type DataSize = number;

export function fromKiB(dataSize: DataSize): DataSize {
	'use strict';
	return dataSize * 1024;
}

export function fromKB(dataSize: DataSize): DataSize {
	'use strict';
	return dataSize * 1000;
}

export function fromMiB(dataSize: DataSize): DataSize {
	'use strict';
	return dataSize * 1048576;
}

export function fromMB(dataSize: DataSize): DataSize {
	'use strict';
	return dataSize * 1000000;
}

export function fromGiB(dataSize: DataSize): DataSize {
	'use strict';
	return dataSize * 1073741824;
}

export function fromGB(dataSize: DataSize): DataSize {
	'use strict';
	return dataSize * 1000000000;
}

export function toKiB(dataSize: DataSize): DataSize {
	'use strict';
	return dataSize / 1024;
}

export function toKB(dataSize: DataSize): DataSize {
	'use strict';
	return dataSize / 1000;
}

export function toMiB(dataSize: DataSize): DataSize {
	'use strict';
	return dataSize / 1048576;
}

export function toMB(dataSize: DataSize): DataSize {
	'use strict';
	return dataSize / 1000000;
}

export function toGiB(dataSize: DataSize): DataSize {
	'use strict';
	return dataSize / 1073741824;
}

export function toGB(dataSize: DataSize): DataSize {
	'use strict';
	return dataSize / 1000000000;
}
