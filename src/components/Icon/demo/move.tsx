import * as React from "react";

function Move(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      className="prefix__icon"
      viewBox="0 0 1024 1024"
      width="1em"
      height="1em"
      {...props}
    >
      <defs>
        <style />
      </defs>
      <path
        d="M500.864 211.52h336.96C905.28 211.52 960 267.072 960 335.616v465.92c0 68.48-54.72 124.032-122.24 124.032H186.24C118.72 925.568 64 870.016 64 801.472V222.528c0-68.48 54.72-124.096 122.24-124.096h211.392c13.632 0 26.304 6.912 33.92 18.432l69.312 94.72zm-130.496-42.88H173.824c-23.36 0-42.24 19.2-42.24 42.88v600.96c0 23.68 18.88 42.88 42.24 42.88h676.352c23.36 0 42.24-19.2 42.24-42.88v-483.2c0-23.68-18.88-42.88-42.24-42.88H477.568a42.112 42.112 0 01-35.2-19.072l-72-98.688z"
      />
      <path
        d="M530.752 425.024a32.192 32.192 0 0141.024 3.776l122.496 122.432a31.36 31.36 0 010 45.504L571.776 719.168l-4.48 3.776a32.192 32.192 0 01-40.96-49.28l66.432-66.432a34.304 34.304 0 01-4.736.32l-235.52-4.288A33.28 33.28 0 01320 570.752a33.28 33.28 0 0132.512-32.512l235.52 4.288c2.624 0 5.184.384 7.68 1.024l-69.44-69.312a32.192 32.192 0 010-45.504z"
      />
    </svg>
  );
}

const MemoMove = React.memo(Move);
export default MemoMove;