describe('add prodcut to cart', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should be able to navigate to the product page and it to the cart', () => {
    cy.get('a[href^="/product"]').first().click()

    // cy.url().should('include', '/product')
    cy.location('pathname').should('include', '/product')
    cy.contains('Adicionar ao Carrinho').click()

    cy.contains('Cart (1)').should('exist')
  })
  it('should not count duplicated product on cart', () => {
    cy.get('a[href^="/product"]').first().click()

    // cy.url().should('include', '/product')
    cy.location('pathname').should('include', '/product')
    cy.contains('Adicionar ao Carrinho').click()
    cy.contains('Adicionar ao Carrinho').click()

    cy.contains('Cart (1)').should('exist')
  })
  it('should be able to search for a product and add it to the cart', () => {
    // cy.get('input[name=q]').type('moletom').parent('form').submit()
    cy.searchByQuery('moletom')

    cy.get('a[href^="/product"]').first().click()

    cy.location('pathname').should('include', '/product')

    cy.contains('Adicionar ao Carrinho').click()

    cy.contains('Cart (1)').should('exist')
  })
})
