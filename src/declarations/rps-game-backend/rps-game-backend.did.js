export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'getHighScore' : IDL.Func([], [IDL.Nat, IDL.Text], ['query']),
    'updateHighScore' : IDL.Func([IDL.Text, IDL.Nat], [], []),
  });
};
export const init = ({ IDL }) => { return []; };
