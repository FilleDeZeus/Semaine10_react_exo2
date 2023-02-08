import React from 'react'

export const Inscription = () => {

  return (
    <div>
      <form id='inscription' class="bg-white p-6 rounded-lg shadow-md">
        <div class="mb-4">
          <label class="block text-gray-700 font-medium mb-2" for='nom'>Nom: </label>
          <input class="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:shadow-outline" type="text" id="nom" name="nom"></input>

          <label class="block text-gray-700 font-medium mb-2" for="prenom">Prénom :</label>
          <input class="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:shadow-outline"  type="text" id="prenom" name="prenom"></input>

          <label class="block text-gray-700 font-medium mb-2" for="email">Adresse e-mail :</label>
          <input class="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:shadow-outline" type="email" id="email" name="email"></input>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-medium mb-2"  for="password">Mot de passe :</label>
          <input class="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:shadow-outline"  type="password" id="password" name="password"></input>
        </div>
          <div class="mb-6 text-center">
          <input class="px-4 py-2 text-white bg-indigo-500 rounded-lg hover:bg-indigo-600"  type="submit" value="S'inscrire"></input>
        </div>
      </form>
    </div>
  )
}
