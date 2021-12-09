import React from 'react';

interface SpinnerProps {
  text?: string;
}

function Spinner(props: SpinnerProps) {
  const { text } = props;

  return (
    <div className="flex justify-center items-center space-x-2">
      <svg
        className="animate-spin h-4 w-4 fill-current text-blueGray-600"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M436.953125 74.980469C388.597656 26.628906 324.304688 0 255.921875 0c-.570313 0-1.148437 0-1.722656.0117188H254.066406c-42.722656.2851562-85.167968 11.4687502-122.75 32.3437502-.011718.003906-.019531.007812-.027344.011719-4.777343 2.574218-6.679687 8.496093-4.234374 13.382812 2.492187 4.980469 8.546874 7 13.523437 4.507812.160156-.078124.304687-.15625.441406-.234374.023438-.007813.042969-.019532.0625-.03125 34.574219-19.207032 73.597657-29.515626 112.875-29.820313.148438.003906.296875.015625.445313.019531 1.230468.039063 2.460937.101563 3.6875.183594.21875.011719.4375.027344.65625.042969 19.304687 1.394531 38.15625 7.835937 54.28125 18.503906.144531.097656.289062.195313.429687.292969.867188.578125 1.722657 1.179687 2.570313 1.78125.757812.542968 1.511718 1.09375 2.257812 1.652344.359375.269531.71875.539062 1.074219.8125 2.078125 1.601562 4.109375 3.28125 6.085937 5.035156.027344.023437.054688.046875.082032.074218.664062.589844 1.320312 1.1875 1.972656 1.792969.6875.648438 1.371094 1.292969 2.042969 1.957031.226562.222657.453125.453126.675781.675782 23.289062 23.367187 35.367188 56.441406 32.894531 89.160156-.003906.023438-.003906.046875-.007812.070312-.078125 1.042969-.183594 2.089844-.292969 3.132813-.058594.53125-.113281 1.058594-.175781 1.585937-.019531.164063-.046875.328126-.066407.492188-.71875 5.691406-1.871093 11.28125-3.425781 16.738281-.207031.710938-.410156 1.425781-.628906 2.132813-.128906.421875-.265625.84375-.402344 1.265625-6.964843 21.488281-20.675781 40.824219-39.023437 54.863281-18.488282 14.148438-40.941406 22.359375-63.6875 23.375-.085938.003906-.171875.003906-.253906.007812-1.441407.058594-2.886719.09375-4.328126.097657-.039062 0-.078124 0-.113281.003906-.675781 0-1.332031.066406-1.96875.191406-19.929687 1.074219-38.707031 6.566407-55.375 15.5-.246093.128907-.488281.265625-.730469.398438-1.105468.597656-2.203124 1.214843-3.289062 1.84375-.742188.433593-1.480469.875-2.21875 1.320312-.578125.355469-1.160156.710938-1.734375 1.070313-4.964844 3.109375-9.75 6.535156-14.289063 10.304687-4.625 3.839844-8.921874 7.972657-12.917968 12.332031-.332032.359376-.664063.714844-.988282 1.078126-.445312.492187-.886718.988281-1.324218 1.488281-20.492188 23.417969-32.933594 54.054687-32.933594 87.53125 0 34.734375 13.300781 67.597656 37.453125 92.542969.046875.046874.089844.09375.136719.140624-6.613282-2.917968-13.105469-6.136718-19.445313-9.65625-.027343-.015624-.058593-.035156-.089843-.050781-.019532-.007812-.039063-.019531-.054688-.03125-36.207031-20.058593-66.671875-50.023437-88.105469-86.652343C31.460938 338.75 20.164062 297.507812 20.164062 256c0-28.8125 5.367188-57.285156 15.949219-84.617188 10.449219-26.992187 25.472657-51.578124 44.644531-73.074218 3.707032-4.15625 3.34375-10.527344-.8125-14.230469-4.152343-3.707031-10.527343-3.34375-14.230468.8125-20.792969 23.304687-37.078125 49.957031-48.402344 79.210937C5.824219 193.765625 0 224.6875 0 256c0 45.082031 12.25 89.847656 35.425781 129.457031 23.265625 39.757813 56.378907 72.304688 95.761719 94.117188.027344.015625.054688.03125.082031.046875.019531.011718.035157.019531.054688.03125 36.761719 20.414062 78.269531 31.578125 120.046875 32.300781h.070312c.917969.023437 1.835938.035156 2.761719.035156.570313.011719 1.148437.011719 1.71875.011719 68.382813 0 132.675781-26.628906 181.027344-74.980469C485.304688 388.667969 511.933594 324.382812 511.933594 256c0-68.378906-26.628906-132.667969-74.980469-181.019531zm-14.257813 347.78125c-44.546874 44.546875-103.773437 69.078125-166.773437 69.078125-.472656 0-.957031 0-1.433594-.007813-.839843-.023437-1.671875-.011719-2.402343-.027343h-.003907c-1.40625-.050782-2.808593-.125-4.207031-.230469-.066406-.003907-.132812-.007813-.199219-.011719-44.464843-3.300781-83.625-33.199219-98.324219-75.554688-7.484374-21.570312-8.121093-44.851562-1.835937-67.320312 4.683594-16.746094 12.890625-31.890625 24.046875-44.5625.132812-.148438.265625-.296875.398438-.445312.675781-.765626 1.375-1.511719 2.074218-2.253907.632813-.671875 1.273438-1.332031 1.921875-1.984375.113281-.113281.226563-.226562.335938-.339844 5.066406-5.054687 10.601562-9.632812 16.542969-13.65625.582031-.390624 1.164062-.777343 1.75-1.15625.738281-.476562 1.476562-.949218 2.226562-1.410156.984375-.609375 1.972656-1.210937 2.976562-1.785156.25-.144531.503907-.28125.753907-.421875 15.339843-8.652344 32.597656-13.652344 50.316406-14.46875.128906-.007813.261719-.011719.394531-.015625 1.550782-.066406 3.105469-.105469 4.660156-.105469.3125 0 .621094-.019531.921876-.050781h.03125c.339843-.03125.671874-.082031.996093-.148438 32.824219-1.761718 63.429688-15.382812 86.832031-38.796874 15.3125-15.320313 26.421876-33.726563 32.769532-53.808594.050781-.15625.097656-.3125.148437-.46875.449219-1.449219.882813-2.90625 1.285157-4.371094.050781-.183594.113281-.363281.160156-.542969.128906-.476562.238281-.957031.359375-1.433593.152343-.578126.296875-1.160157.4375-1.742188.648437-2.652344 1.210937-5.3125 1.683593-7.984375.109376-.59375.207032-1.191406.308594-1.789063.109375-.675781.222656-1.347656.324219-2.023437.199219-1.34375.375-2.695313.535156-4.046875.019531-.179688.039063-.355469.058594-.535156.574219-5.050782.875-10.164063.875-15.324219 0-34.886719-13.398437-67.855469-37.730469-92.839844-.359375-.363281-.734375-.710937-1.09375-1.074219-.722656-.734374-1.457031-1.453124-2.199218-2.167968-.230469-.21875-.449219-.453125-.679688-.667969 29.914062 11.699219 57.359375 29.574219 80.757812 52.96875C467.238281 133.777344 491.773438 193.003906 491.773438 256c0 62.992188-24.535157 122.21875-69.078126 166.761719zm0 0" />
        <path d="M430.515625 127.808594l-.441406-.105469c-5.417969-1.273437-10.847657 2.085937-12.121094 7.503906-1.273437 5.421875 2.085937 10.847657 7.507813 12.121094l.441406.105469c.777344.183594 1.554687.269531 2.316406.269531 4.574219 0 8.714844-3.132813 9.804688-7.777344 1.273437-5.417969-2.085938-10.84375-7.507813-12.117187zm0 0M100.570312 74.960938l.445313.105468c.777344.179688 1.550781.269532 2.316406.269532 4.570313 0 8.710938-3.132813 9.800781-7.777344 1.277344-5.417969-2.085937-10.84375-7.503906-12.121094l-.445312-.101562c-5.417969-1.277344-10.84375 2.085937-12.117188 7.503906-1.277344 5.421875 2.085938 10.847656 7.503906 12.121094zm0 0M316.757812 121.933594c0-31.808594-25.878906-57.6875-57.6875-57.6875-31.808593 0-57.6875 25.878906-57.6875 57.6875s25.878907 57.6875 57.6875 57.6875c31.808594 0 57.6875-25.878906 57.6875-57.6875zm-95.210937 0c0-20.691406 16.835937-37.523438 37.527344-37.523438 20.691406 0 37.523437 16.832032 37.523437 37.523438s-16.832031 37.527344-37.523437 37.527344c-20.691407 0-37.527344-16.835938-37.527344-37.527344zm0 0M259.074219 319.710938c-31.808594 0-57.6875 25.878906-57.6875 57.6875 0 31.808593 25.878906 57.6875 57.6875 57.6875 31.808593 0 57.6875-25.878907 57.6875-57.6875 0-31.808594-25.882813-57.6875-57.6875-57.6875zm0 95.210937c-20.691407 0-37.527344-16.832031-37.527344-37.523437 0-20.695313 16.835937-37.527344 37.527344-37.527344 20.691406 0 37.523437 16.832031 37.523437 37.527344 0 20.691406-16.832031 37.523437-37.523437 37.523437zm0 0M456.285156 169.765625c-2.121094-5.144531-8.011718-7.597656-13.160156-5.476563-5.148438 2.121094-7.601562 8.011719-5.480469 13.160157 7.621094 18.488281 16.269531 48.128906 14.203125 84.363281-.316406 5.558594 3.933594 10.320312 9.492188 10.636719.195312.011719.390625.019531.582031.019531 5.304687 0 9.75-4.144531 10.054687-9.507812 2.28125-40.023438-7.273437-72.769532-15.691406-93.195313zm0 0" />
      </svg>
      {text}
    </div>
  );
}

export default Spinner;
