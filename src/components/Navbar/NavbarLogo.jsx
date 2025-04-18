import React from 'react';

function NavbarLogo() {
  return (
    <div className="text-white font-bold text-xl cursor-pointer">
      <span className="lg:hidden">PR</span> {/* Show only on small screens */}
      <span className="hidden lg:inline">Paras Rana</span> {/* Show on large screens */}
    </div>
  );
}

export default NavbarLogo;
